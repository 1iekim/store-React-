import { makeAutoObservable } from "mobx";

export default class DeviceStore {
  constructor() {
    this._types = [
      { id: 1, name: "Холодильники" },
      { id: 2, name: "Смартфоны" },
      { id: 3, name: "Ноутбуки" },
    ];
    this._brands = [
      { id: 1, name: "Samsung" },
      { id: 2, name: "Apple" },
      { id: 3, name: "Lenove" },
      { id: 4, name: "Asus" },
    ];
    this._devices = [
      {
        id: 1,
        name: "12 pro",
        price: 10000,
        rating: 0,
        img: "90c7adb2-1d40-47a0-be2d-32a1118f02bb.jpg",
      },
      {
        id: 2,
        name: "legion",
        price: 150000,
        rating: 0,
        img: "2c9b6afb-7967-44d2-a21a-2c355d1562b7.jpg",
      },
      {
        id: 4,
        name: "legionX",
        price: 50000,
        rating: 0,
        img: "9285d874-61bf-4da2-bd01-3dafe5de5873.jpg",
      },
      {
        id: 5,
        name: "Zarget",
        price: 200000,
        rating: 0,
        img: "af00e036-88f7-4131-9d69-f4b143566a93.jpg",
      },
      {
        id: 6,
        name: "Super Pro",
        price: 99999,
        rating: 0,
        img: "de680ff6-38d2-4c29-8c61-6dbf783c8bff.jpg",
      },
    ];
    this._selectedType = {};
    this._selectedBrand = {};
    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }

  setBrands(brands) {
    this._brands = brands;
  }

  setDevices(devices) {
    this._devices = devices;
  }

  setSelectedType(type) {
    this._selectedType = type;
  }

  setSelectedBrand(brand) {
    this._selectedBrand = brand;
  }

  get types() {
    return this._types;
  }

  get brands() {
    return this._brands;
  }

  get devices() {
    return this._devices;
  }

  get selectedType() {
    return this._selectedType;
  }

  get selectedBrand() {
    return this._selectedBrand;
  }
}
