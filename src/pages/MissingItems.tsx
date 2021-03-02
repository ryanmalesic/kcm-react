import React from 'react';

import DownloadMissingItemsCard from '../components/DownloadMissingItemsCard';
import ItemCard from '../components/ItemCard';
import PageTitle from '../components/PageTitle';
import ScanItemCard from '../components/ScanItemCard';
import useItems from '../hooks/useItems';
import useMissingItems from '../hooks/useMissingItems';
import useNewestBook from '../hooks/useNewestBook';

const MissingItems: React.FC = () => {
  const { book } = useNewestBook();
  const { status: itemsStatus, items, addItem } = useItems();
  const { status: missingItemsStatus, items: missingItems } = useMissingItems({
    bookId: book?.id,
    items,
  });

  const handleAddItem = async (identifier: string) => {
    if (book) {
      await addItem(book.id, identifier);
    }
  };

  return (
    <>
      <PageTitle title="Missing Items" subtitle="Find items missing from categories" />
      <main className="grid grid-cols-4 gap-6">
        <div className="col-span-4 lg:col-span-3 space-y-6">
          <ScanItemCard count={items.length} status={itemsStatus} onAddItem={handleAddItem} />
          {!(missingItemsStatus === 'pending') && (
            <DownloadMissingItemsCard items={missingItems} status={missingItemsStatus} />
          )}
        </div>

        <div className="col-span-4 lg:col-span-1">
          <ItemCard item={items[items.length - 1]} title="Last scanned item" />
        </div>
      </main>
    </>
  );
};

export default MissingItems;
