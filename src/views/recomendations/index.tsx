import Icon from '@ant-design/icons';
import { Typography } from 'antd';
import { getProviders } from 'appRedux/actions/addOnAction';
import { AddOnSelector } from 'appRedux/reducers';
import { useAppDispatch } from 'appRedux/store';
import { SearchCustom } from 'assets/icons';
import { ScalableInput } from 'components';
import CustomDropdown from 'components/dropdown';
import { UserCardSekeleton } from 'components/skeleton';
import UserCard from 'components/userCard/index.tsx';
import { debounce } from 'lodash';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { InputLength, ServiceProviders } from 'types';
import { humanize, searchInArrayOfObjectsandStrings } from 'utils';

/**
 * A simple component that displays a card with the easy audit heading.
 *
 * @returns A JSX element representing a card with the easy audit heading.
 */
const Recomendations = () => {
  const dispatch = useAppDispatch();
  const { providers, providerLoading } = useSelector(AddOnSelector);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');

  const debounceVal = debounce((value: string) => {
    setSearch(value);
  }, 200);

  useEffect(() => {
    if (!providers && providerLoading) {
      dispatch(getProviders());
    }
  }, [providers]);

  const dataKeys: Array<string | Record<string, string>> = providers
    ? Object.keys(providers[0])
    : [];

  const filteredProvider = filter
    ? providers?.filter((provider) => {
        return provider.type === filter;
      })
    : search
    ? (providers as any[] | undefined)?.filter(searchInArrayOfObjectsandStrings(search, dataKeys))
    : providers;

  const selectOptions = Object.values(ServiceProviders).map((provider) => {
    return {
      label: humanize(provider),
      value: provider
    };
  });
  return (
    <div className="container ">
      <h1 className="text-2xl my-4">Recommendations</h1>

      <div className="bg-tertiary  p-8 rounded-lg">
        <div className="flex gap-7">
          <ScalableInput
            onChange={(e) => {
              debounceVal(e.target.value);
            }}
            placeholder={'Search'}
            className="toolbar-search"
            suffix={<Icon component={SearchCustom} />}
            maxLength={InputLength.TABLE_TOOLBAR_SEARCH_LENGTH}
          />
          <Typography.Title level={4} style={{ width: '70px' }}>
            Type:{' '}
          </Typography.Title>
          <CustomDropdown
            options={selectOptions}
            style={{ width: '300px' }}
            allowClear
            onChange={(val) => {
              setFilter(val);
            }}
          />
        </div>

        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          {providerLoading
            ? Array(4)
                .fill(0)
                .map((_, index) => {
                  return <UserCardSekeleton key={index} />;
                })
            : filteredProvider?.map((provider, index) => {
                return (
                  <div key={index}>
                    <UserCard data={provider} />
                  </div>
                );
              })}
        </div>
      </div>
    </div>
  );
};

export default Recomendations;
