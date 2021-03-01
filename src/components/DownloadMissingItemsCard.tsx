import React from 'react';

import Card from './Card';
import CardBody from './CardBody';
import CardHeader from './CardHeader';
import DownloadItem from './DownloadItem';
import { Item } from '../types/item';
import {
  downloadHeaders,
  toClassDescItems,
  toFileSafeName,
  toSubClassDescriptionItems,
} from '../utils/item';
import useCsv from '../hooks/useCsv';
import Download from './Download';

interface DownloadMissingItemsCardProps {
  items: Item[];
  status: 'pending' | 'loading' | 'failure' | 'success';
}

const DownloadMissingItemsCard: React.FC<DownloadMissingItemsCardProps> = (
  props: React.PropsWithChildren<DownloadMissingItemsCardProps>
) => {
  const { items, status } = props;

  const { download } = useCsv();

  const handleDownloadClick = (data: any[], name: string) => () => {
    download(data, downloadHeaders, name);
  };

  const classDescItems = toClassDescItems(items);
  const subClassDescriptionItems = toSubClassDescriptionItems(items);

  const fileName = (name: string) => `missing-items-${toFileSafeName(name)}.csv`;

  return (
    <Card>
      <CardHeader title="Missing Items" subtitle="Download the missing items." />
      <CardBody>
        {(status === 'loading' || status === 'failure') && (
          <div className="flex items-center justify-center w-full h-full">
            <span className="text-sm text-gray-600">
              {status === 'loading' ? 'Loading...' : 'Loading missing items failed.'}
            </span>
          </div>
        )}

        {status === 'success' && (
          <div className="space-y-6">
            <Download title="Missing items from all scanned class descriptions.">
              <DownloadItem onDownloadClick={handleDownloadClick(items, 'missing-items.csv')}>
                missing-items.csv
              </DownloadItem>
            </Download>

            <Download title="Missing items from specific class descriptions.">
              {Object.keys(classDescItems).map((classDesc) => (
                <DownloadItem
                  key={classDesc}
                  onDownloadClick={handleDownloadClick(
                    classDescItems[classDesc],
                    fileName(classDesc)
                  )}
                >
                  {fileName(classDesc)}
                </DownloadItem>
              ))}
            </Download>

            <Download title="Missing items from specific subclass descriptions.">
              {Object.keys(subClassDescriptionItems).map((subClassDescription) => (
                <DownloadItem
                  key={subClassDescription}
                  onDownloadClick={handleDownloadClick(
                    subClassDescriptionItems[subClassDescription],
                    fileName(subClassDescription)
                  )}
                >
                  {fileName(subClassDescription)}
                </DownloadItem>
              ))}
            </Download>
          </div>
        )}
      </CardBody>
    </Card>
  );
};

export default DownloadMissingItemsCard;
