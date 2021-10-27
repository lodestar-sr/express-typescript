import Employees from '../models/Employees';
import Companies from '../models/Companies';

export const createEmployee = async (employee: any): Promise<Employees> => {
    return await Employees.create(employee);
};

export const find = async (query: any): Promise<Employees[]> => {
    const employees: Employees[] | null = await Employees.findAll<Employees>({
        include: [Companies],
        where: { ...query },
    });
    return employees;
};

export const findById = async (id: number): Promise<Employees | null> => {
    const employee: Employees | null = await Employees.findOne<Employees>({
        include: [Companies],
        where: { id },
    });
    return employee;
};

export const updateEmployee = async (id: number, employee: any): Promise<boolean> => {
    const exist = await findById(id);
    if (!exist) {
        return false;
    }

    await Employees.update({ ...employee }, { where: { id } });
    return true;
};

export const deleteEmployee = async (id: number): Promise<boolean> => {
    const result = await Employees.destroy({ where: { id }} );
    return result > 0;
};
