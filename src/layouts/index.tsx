import { IRouteComponentProps } from 'umi'
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;


export default ({ children, location, route, history, match }: IRouteComponentProps) => {
    console.log(location);
    

    const onMenuItemClick = (item:any) => {
        history.push(`/${item.key}`)
    }

    return (
        <Layout>
            <Header></Header>
            <Layout>
                <Sider width={200}>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                        onClick={onMenuItemClick}
                    >
                        <SubMenu key="nav1" icon={<UserOutlined />} title="subnav 1">
                            <Menu.Item key="nav1/one">page1</Menu.Item>
                            <Menu.Item key="nav1/two">page2</Menu.Item>
                            <Menu.Item key="nav1/three">page3</Menu.Item>
                            <Menu.Item key="nav1/four">page4</Menu.Item>
                        </SubMenu>
                        <SubMenu key="nav2" icon={<LaptopOutlined />} title="subnav 2">
                            <Menu.Item key="nav2/one">option5</Menu.Item>
                            <Menu.Item key="nav2/two">option6</Menu.Item>
                            <Menu.Item key="nav2/three">option7</Menu.Item>
                            <Menu.Item key="nav2/four">option8</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
                            <Menu.Item key="9">option9</Menu.Item>
                            <Menu.Item key="10">option10</Menu.Item>
                            <Menu.Item key="11">option11</Menu.Item>
                            <Menu.Item key="12">option12</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                        }}
                    >
                        {children}
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    )
}