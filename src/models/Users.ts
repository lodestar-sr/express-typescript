import {
    Table,
    Column,
    Model,
    DefaultScope,
    DataType,
    CreatedAt,
    UpdatedAt,
    DeletedAt,
    Index,
} from 'sequelize-typescript';

@DefaultScope({
    order: [['id', 'ASC']],
})
@Table({
    tableName: 'users',
    timestamps: false,
})
export default class Users extends Model<Users> {
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
        field: 'password',
        type: DataType.STRING(255),
        allowNull: false,
    })
    public password!: string;

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

    @DeletedAt
    @Column({
        field: 'deleted_at',
        type: DataType.DATE,
        allowNull: true,
    })
    public deletedAt!: Date;
}
