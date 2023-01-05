import { MigrationInterface, QueryRunner } from "typeorm";

export class createTable1672866344514 implements MigrationInterface {
    name = 'createTable1672866344514'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "comments" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "text" character varying NOT NULL, "userId" uuid, "advertsId" uuid, CONSTRAINT "PK_8bf68bc960f2b69e818bdb90dcb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "address" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "cep" character varying(12) NOT NULL, "state" character varying(50) NOT NULL, "street" character varying(50) NOT NULL, "city" character varying(50) NOT NULL, "number" character varying(10) NOT NULL, "complement" character varying(50) NOT NULL, CONSTRAINT "PK_d92de1f82754668b5f5f5dd4fd5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "email" character varying NOT NULL, "cpf" character varying NOT NULL, "cellphone" character varying NOT NULL, "birthdate" character varying NOT NULL, "description" character varying NOT NULL, "isSeller" boolean NOT NULL, "password" character varying NOT NULL, "isActive" boolean NOT NULL DEFAULT true, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "addressId" uuid, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "REL_217ba147c5de6c107f2fa7fa27" UNIQUE ("addressId"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "adverts" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "advertsType" character varying NOT NULL, "title" character varying NOT NULL, "year" character varying NOT NULL, "mileage" character varying NOT NULL, "price" numeric(8,2) NOT NULL, "description" character varying NOT NULL, "vehicleType" character varying NOT NULL, "coverImage" character varying NOT NULL, "galleryImages" text array NOT NULL, "isActive" boolean NOT NULL DEFAULT true, "isPublished" boolean NOT NULL DEFAULT true, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "userId" uuid, CONSTRAINT "PK_36876931b51109a932d0bf3b40a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_7e8d7c49f218ebb14314fdb3749" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_ec5eb1ef74b55d25b514670c5c0" FOREIGN KEY ("advertsId") REFERENCES "adverts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_217ba147c5de6c107f2fa7fa271" FOREIGN KEY ("addressId") REFERENCES "address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "adverts" ADD CONSTRAINT "FK_80a023b502ad7957fb8d470e4e2" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "adverts" DROP CONSTRAINT "FK_80a023b502ad7957fb8d470e4e2"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_217ba147c5de6c107f2fa7fa271"`);
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_ec5eb1ef74b55d25b514670c5c0"`);
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_7e8d7c49f218ebb14314fdb3749"`);
        await queryRunner.query(`DROP TABLE "adverts"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "address"`);
        await queryRunner.query(`DROP TABLE "comments"`);
    }

}
