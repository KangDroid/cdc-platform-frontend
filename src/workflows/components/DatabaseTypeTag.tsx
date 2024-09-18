import { Tag } from 'antd';

import { DatabaseType } from '../../common/lib/workflow/api';

export function DatabaseTypeTag({
  databaseType,
}: {
  databaseType: DatabaseType;
}) {
  switch (databaseType) {
    case 'Postgres':
      return <Tag color={'#008bb9'}>Postgres</Tag>;
    case 'MsSql':
      return <Tag>MS-SQL/Azure SQL</Tag>;
    default:
      return <Tag>{databaseType}</Tag>;
  }
}
