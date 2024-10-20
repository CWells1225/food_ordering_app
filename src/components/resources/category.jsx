import { List, 
        Datagrid, 
        TextField, 
        Create, 
        Edit,
        SimpleForm, 
        TextInput, 
        required,
        DateField, 
        ImageInput, 
        ImageField  
    } from 'react-admin';

    import { BiSolidCategory } from "react-icons/bi";

const CategoryForm = () => {
    return (
        <SimpleForm sanitizeEmptyValues>
            <ImageInput source='image' label='Image'>
            <ImageField source='src' title='title' />
            </ImageInput>
            <TextInput source='title' validate={[required()]} fullWidth />
            <TextInput source='description' fullWidth />
        </SimpleForm>
    );
}    
const CategoryCreate = () => (
    <Create>
        <CategoryForm />
    </Create>
);

const CategoryEdit = () => (
    <Edit>
        <CategoryForm />
    </Edit>
);

const CategoryList = () => (
    <List>
        <Datagrid rowClick='edit'>
            <ImageField source='image.src' label='Image'/>
            <TextField source='title' />
            <TextField source='description' />
            <DateField source='createdate' showTime label='Created At'/>
            <DateField source='lastupdate' showTime label='Updated At'/>
        </Datagrid>
    </List>
);

export const CategoryProps = {
    icon: BiSolidCategory,
    name:'category', 
    list: CategoryList,
    create: CategoryCreate,
    edit: CategoryEdit,
}
