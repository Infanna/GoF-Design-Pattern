export class DB {
    public id: number = 0;

    private constructor() { }

    private static db: DB | undefined;

    public static getInstance(): DB {
        if (!DB.db) {
            DB.db = new DB();
        }
        return DB.db
    }

    private pool = 0;
    public connect(): boolean {
        if (this.pool < 5) {
            this.pool++;
            return true;
        }
        return false;
    }
}