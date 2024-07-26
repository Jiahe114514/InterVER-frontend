import Guide from '@/components/Guide';
import { trim } from '@/utils/format';
import { PageContainer } from '@ant-design/pro-components';
import { Link, useModel } from '@umijs/max';
import { Button, Space } from 'antd-mobile';
import styles from './index.scss';

const HomePage: React.FC = () => {
  const { name } = useModel('global');
  return (
    <>
      <PageContainer ghost>
        <div className={styles.container}>
          <Guide name={trim(name)} />
        </div>
        <Link to="/404">404 Page</Link>
      </PageContainer>
      <Space wrap>
        <Button shape="default" color="primary">
          Default Button
        </Button>
        <Button block shape="rounded" color="primary">
          Rounded Button
        </Button>
        <Button block shape="rectangular" color="primary">
          Rectangular Button
        </Button>
      </Space>
    </>
  );
};

export default HomePage;
