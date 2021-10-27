import Companies from '../models/Companies';

export const createCompany = async (company: any): Promise<Companies> => {
    return await Companies.create(company);
};

export const find = async (query: any): Promise<Companies[]> => {
    const companies: Companies[] | null = await Companies.findAll<Companies>({
        where: { ...query },
    });
    return companies;
};

export const findById = async (id: number): Promise<Companies | null> => {
    const company: Companies | null = await Companies.findOne<Companies>({
        where: { id },
    });
    return company;
};

export const updateCompany = async (id: number, company: any): Promise<boolean> => {
    const exist = await findById(id);
    if (!exist) {
        return false;
    }

    await Companies.update({ ...company }, { where: { id } });
    return true;
};

export const deleteCompany = async (id: number): Promise<boolean> => {
    const result = await Companies.destroy({ where: { id }} );
    return result > 0;
};

