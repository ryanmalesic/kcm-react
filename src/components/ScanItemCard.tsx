import React from 'react';

import Card from './Card';
import CardBody from './CardBody';
import CardHeader from './CardHeader';

interface ScanItemCardProps {
  count: number;
  status: 'pending' | 'loading' | 'failure' | 'success';
  onAddItem(identifier: string): Promise<void>;
}

const ScanItemCard: React.FC<ScanItemCardProps> = (
  props: ScanItemCardProps
) => {
  const { count, status, onAddItem } = props;

  const inputRef = React.useRef<HTMLInputElement>(null);
  const [identifier, setIdentifier] = React.useState('');

  React.useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleAddItemClick = async () => {
    await onAddItem(identifier);
    setIdentifier('');
    inputRef.current?.focus();
  };

  const handleIdentifierChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setIdentifier(event.target.value);
  };

  const handleAddItemKeyDown: React.KeyboardEventHandler = async (event) => {
    if (event.key === 'Enter') {
      await onAddItem(identifier);
      setIdentifier('');
      inputRef.current?.focus();
    }
  };

  return (
    <Card>
      <CardHeader
        title="Scan Items"
        subtitle="Scan items to add them to the set"
      />
      <CardBody>
        <div className="grid grid-cols-2 gap-8">
          <div className="col-span-1">
            <label
              className="block text-sm text-gray-600"
              htmlFor="itemIdentifier"
            >
              Item Identifier
              <div className="relative max-w-min">
                <input
                  className="pl-0 text-sm text-gray-900 border-0 border-b focus:ring-0 focus:border-karns-blue"
                  disabled={status === 'loading'}
                  id="itemIdentifier"
                  name="itemIdentifier"
                  placeholder="SVIC or UPC"
                  ref={inputRef}
                  type="text"
                  value={identifier}
                  onChange={handleIdentifierChange}
                  onKeyDown={handleAddItemKeyDown}
                />
                <button
                  className="absolute inset-y-0 right-0 text-sm text-karns-blue"
                  disabled={!identifier}
                  type="button"
                  onClick={handleAddItemClick}
                >
                  Add Item
                </button>
              </div>
            </label>

            {status === 'failure' && (
              <span className="block text-sm text-red-600">
                Error adding item
              </span>
            )}
          </div>

          <div className="col-span-1">
            <h3 className="text-sm text-gray-600">Items Added</h3>
            <span className="block pt-2 text-sm text-gray-900">
              {count} Item
              {count !== 1 && 's'}
            </span>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default ScanItemCard;
