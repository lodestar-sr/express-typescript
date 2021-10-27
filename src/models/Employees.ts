import {
    Table,
    Column,
    Model,
    DefaultScope,
    DataType,
    CreatedAt,
    UpdatedAt,
    ForeignKey,
    BelongsTo,
    Index,
} from 'sequelize-typescript';
import Companies from './Companies';

@DefaultScope({
    order: [['id', 'ASC']],
})
@Table({
    tableName: 'employees',
    timestamps: false,
})
export default class Employees extends Model<Employees> {
    @Column({
        field: 'id',
        type: DataType.NUMBER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    })
    public id!: number;

    @Index({
        type: 'UNIQUE',
        unique: true,
    })
    @Column({
        field: 'email',
        type: DataType.STRING(100),
        allowNull: false,
    })
    public email!: string;

    @Column({
        field: 'phone',
        type: DataType.STRING(255),
    })
    public phone!: string;

    @Column({
        field: 'firstname',
        type: DataType.STRING(255),
        allowNull: false,
    })
    public firstname!: string;

    @Column({
        field: 'lastname',
        type: DataType.STRING(255),
        allowNull: false,
    })
    public lastname!: string;

    @ForeignKey(() => Companies)
    @Column({
        field: 'company_id',
        type: DataType.NUMBER,
    })
    public companyId!: number;

    @BelongsTo(() => Companies)
    public companies!: Companies;

    @CreatedAt
    @Column({
        field: 'created_at',
        type: DataType.DATE,
        allowNull: false,
        defaultValue: DataType.NOW,
    })
    public createdAt!: Date;

    @UpdatedAt
    @Column({
        field: 'updated_at',
        type: DataType.DATE,
        allowNull: false,
        defaultValue: DataType.NOW,
    })
    public updatedAt!: Date;
}
