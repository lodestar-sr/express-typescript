import {
    Table,
    Column,
    Model,
    DefaultScope,
    DataType,
    CreatedAt,
    UpdatedAt,
    HasMany,
    Index,
} from 'sequelize-typescript';
import Employees from './Employees';

@DefaultScope({
    order: [['id', 'ASC']],
})
@Table({
    tableName: 'companies',
    timestamps: false,
})
export default class Companies extends Model<Companies> {
    @Column({
        field: 'id',
        type: DataType.NUMBER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    })
    public id!: number;

    @Column({
        field: 'name',
        type: DataType.STRING(255),
        allowNull: false,
    })
    public name!: string;

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
        allowNull: false,
    })
    public phone!: string;

    @Column({
        field: 'website',
        type: DataType.STRING(255),
        allowNull: false,
    })
    public website!: string;

    @HasMany(() => Employees)
    public employees: Employees[] | undefined;

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
