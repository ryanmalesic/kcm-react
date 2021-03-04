import { ClassDescItems, Item, SubClassDescriptionItems } from '../types/item';

export function fromIdentifierToSvic(identifier: string): string {
  return identifier.slice(0, 7);
}

export function fromIdentifierToUpc(identifer: string): string {
  return `00${identifer[0]}-${identifer.slice(1, 6)}-${identifer.slice(6, 11)}`;
}

export function toClassDescItems(items: Item[]): ClassDescItems {
  return items.reduce<ClassDescItems>(
    (prev, curr) => ({
      ...prev,
      [curr.classDesc]: [...(prev[curr.classDesc] ?? []), curr],
    }),
    {}
  );
}

export function toSubClassDescriptionItems(
  items: Item[]
): SubClassDescriptionItems {
  return items.reduce<SubClassDescriptionItems>(
    (prev, curr) => ({
      ...prev,
      [curr.subClassDescription]: [
        ...(prev[curr.subClassDescription] ?? []),
        curr,
      ],
    }),
    {}
  );
}

export const toFileSafeName = (name: string): string =>
  name
    .replaceAll(' ', '-')
    .replaceAll('/', '-')
    .replaceAll('&', 'and')
    .replaceAll('\\', '-')
    .toLowerCase();

export const downloadHeaders: (keyof Item)[] = [
  'itemCode',
  'upc',
  'restrictPfInd',
  'brand',
  'description',
  'size',
  'pack',
  'cost',
  'unitCost',
  'baseCripSrp',
  'baseCripPct',
  'classDesc',
  'subClassDescription',
];
