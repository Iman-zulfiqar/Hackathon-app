import { Dropdown, Space } from 'antd';
import {MoreOutlined}  from '@ant-design/icons';
const items = [
  {
    label: <a href="https://www.antgroup.com">1st menu item</a>,
    key: '0',
  },
  {
    label: <a href="https://www.aliyun.com">2nd menu item</a>,
    key: '1',
  },
  {
    type: 'divider',
  },
  {
    label: '3rd menu item',
    key: '3',
  },
];

function MenuDropdown({options={items},width='100px',id}) {
  return (
    <Dropdown
    menu= {options}
    trigger={['click']}
    style={{width:width}}
  >
    <a onClick={(e) => {e.preventDefault(); localStorage.setItem('id',id);}}>
      <Space>
    
        <MoreOutlined />
      </Space>
    </a>
  </Dropdown>
  )
}

export default MenuDropdown
