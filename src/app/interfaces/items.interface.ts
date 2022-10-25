export interface IItem {
    id: number,
    name: string,
    price: number,
    image: string,
    isSelected: boolean
}

export interface IItemState {
    items: Array<IItem>
}

export interface IItemListState {
    itemList: Array<IItem>
}
