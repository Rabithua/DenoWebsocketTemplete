export type Predicate<ItemType> = (x: ItemType[]) => ItemType[]

export type PredicateGenerator<ItemType, PredicateObjectType> = (
  x: ItemType[],
) => (y: PredicateObjectType) => Promise<ItemType[]>

export type PredicateMap<PredicateKeyType extends string, ItemType> = {
  [K in PredicateKeyType]: Predicate<ItemType>
}

export type PredicateGeneratorMap<
  PredicateGeneratorKeyType extends string,
  ItemType,
  PredicateObjectType,
> = {
  [K in PredicateGeneratorKeyType]: PredicateGenerator<
    ItemType,
    PredicateObjectType
  >
}

export type PredicateStoreFull<Key extends string, ItemType> = {
  [K in Key]: ItemType[]
}

export type PredicateGeneratorStoreFull<
  Key extends string,
  ItemType,
  PredicateObjectType,
> = {
  [K in Key]: ReturnType<PredicateGenerator<ItemType, PredicateObjectType>>
}

export type PredicateStore<
  PredicateKeyType extends string,
  PredicateGeneratorKeyType extends string,
  ItemType,
  PredicateObjectType,
> = Partial<PredicateStoreFull<PredicateKeyType, ItemType>> &
  Partial<
    PredicateGeneratorStoreFull<
      PredicateGeneratorKeyType,
      ItemType,
      PredicateObjectType
    >
  > & {
    all: ItemType[]
  }
