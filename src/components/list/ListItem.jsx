
import { Card, Space } from 'antd';
import {MoreOutlined}  from '@ant-design/icons';
function ListItem({title='title is here',
extra=<> <MoreOutlined /></>,
width='300px',
content='card content is here',
bgcolor='#FF0084',
contentFontSize,
titleFontSize
}) {
   
  return (
    <Space direction="vertical" size={16}>
    <Card
      title={title}
      extra={extra}
      
      style={{
        maxWidth: width,
        wisth:'100%',
        background:bgcolor,
        fontSize:`calc(${titleFontSize} + .3vw)`
      }}
    >
      <p> {content}</p>

    </Card>
  
  </Space>
  )
}

export default ListItem;
