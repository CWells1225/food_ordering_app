import { List, 
    Datagrid, 
    TextField, 
    Create, 
    Edit,
    SimpleForm, 
    TextInput, 
    NumberInput,
    required,
    number,
    DateField, 
    ImageInput, 
    ImageField, 
    NumberField,  
} from 'react-admin';

import { BiFoodMenu } from "react-icons/bi";

const ItemForm = () => {
return (
    <SimpleForm sanitizeEmptyValues>
        <ImageInput source='image' label='Image'>
        <ImageField source='src' title='title' />
        </ImageInput>
        <TextInput source='label' validate={[required()]} fullWidth />
        <NumberInput source='price' validate={[required(), number()]} fullWidth />
        <TextInput source='description' fullWidth />
    </SimpleForm>
);
}    
const ItemCreate = () => (
<Create>
    <ItemForm />
</Create>
);

const ItemEdit = () => (
<Edit>
    <ItemForm />
</Edit>
);

const ItemList = () => (
<List>
    <Datagrid rowClick='edit'>
        <ImageField source='image.src' label='Image'/>
        <TextField source='label' />
        <NumberField source='price' />
        <TextField source='description' />
        <DateField source='createdate' showTime label='Created At'/>
        <DateField source='lastupdate' showTime label='Updated At'/>
    </Datagrid>
</List>
);

export const ItemProps = {
icon: BiFoodMenu,     
name:'item', 
list: ItemList,
create: ItemCreate,
edit: ItemEdit,
}
