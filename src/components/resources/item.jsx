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
    SimpleFormIterator,
    ArrayInput,
    BooleanInput,
    ReferenceField,
    ReferenceInput, 
    SelectInput, 
    ChipField,
} from 'react-admin';

import { BiFoodMenu } from "react-icons/bi";

const ItemForm = () => {
return (
    <SimpleForm sanitizeEmptyValues>
        <ImageInput source='image' label='Image'>
        <ImageField source='src' title='title' />
        </ImageInput>
        <ReferenceInput source='category' reference='category'>
        <SelectInput optionText='title' validate={[required()]} fullWidth />
        </ReferenceInput>
        <TextInput source='label' validate={[required()]} fullWidth />
        <NumberInput source='price' validate={[required(), number()]} fullWidth />
        <TextInput source='description' fullWidth />
        <ArrayInput source='variants'>
            <SimpleFormIterator fullWidth>
                <TextInput source='type' helperText={false} fullWidth/>
                <ArrayInput source='choices'>
            <SimpleFormIterator fullWidth>
                <TextInput source='label' />
                <NumberInput source='price' defaultValue={0}/>
            </SimpleFormIterator>
                </ArrayInput>
                <BooleanInput source='allowMultiple' helperText={false} fullWidth />
                <BooleanInput source='isRequired' helperText={false} fullWidth />
            </SimpleFormIterator>
        </ArrayInput>

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
        <ReferenceField source='category' reference='category'>
            <ChipField source='title' />
        </ReferenceField>
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
