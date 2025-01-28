export declare class MockStorage implements Storage {
    [index: number]: string;
    [key: string]: any;
    get length(): number;
    key(index: number): string | any;
    setItem(key: string, data: any): void;
    getItem(key: string): string;
    removeItem(key: string): void;
    clear(): void;
}
