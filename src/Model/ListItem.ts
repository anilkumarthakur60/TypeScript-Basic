export interface Item {
    id: number
    name: string
    checked: boolean
}


export default class ListItem implements Item {

    constructor(

        private _id: string = '',
        private _name: string = '',
        private _checked: boolean = false

    ) {


    }




    get id(): string {
        return this._id
    }

    set id(id: string) {
        this._id = id
    }


    get item(): string {
        return this._name
    }

    set item(item: string) {
        this._name = item
    }

    get checked(): boolean {
        return this._checked
    }

    set checked(checked: boolean) {
        this._checked = checked
    }

}