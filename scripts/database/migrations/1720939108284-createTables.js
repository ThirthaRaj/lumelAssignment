export class createTables1720939108284 {
    constructor() {
        this.name = 'createTables1720939108284';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "Products" ("id" SERIAL NOT NULL, "productName" character varying NOT NULL, "category" character varying NOT NULL, CONSTRAINT "UQ_5fa90e54117f5a440b807a53076" UNIQUE ("productName"), CONSTRAINT "PK_36a07cc432789830e7fb7b58a83" PRIMARY KEY ("id"))`),
            await queryRunner.query(`CREATE TABLE "orders" ("id" SERIAL NOT NULL, "dateOfSale" TIMESTAMP NOT NULL, "unitPrice" numeric(5,2) NOT NULL, "discount" numeric(5,2) NOT NULL, "shipingCost" numeric(5,2) NOT NULL, "paymentMethod" character varying NOT NULL, CONSTRAINT "PK_710e2d4957aa5878dfe94e4ac2f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "customers" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "customerName" character varying NOT NULL, "customerAddress" character varying NOT NULL, "region" character varying NOT NULL, CONSTRAINT "UQ_8536b8b85c06969f84f0c098b03" UNIQUE ("email"), CONSTRAINT "PK_133ec679a801fab5e070f73d3ea" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "customers"`);
        await queryRunner.query(`DROP TABLE "orders"`);
        await queryRunner.query(`DROP TABLE "Products"`);
    }
}
//# sourceMappingURL=1720939108284-createTables.js.map