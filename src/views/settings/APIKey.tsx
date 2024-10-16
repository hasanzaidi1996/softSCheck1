import { Button, Input } from 'antd';

/**
 * APIKey component
 *
 * This component renders the APIKey page.
 *
 * @returns {React.ReactElement} The APIKey component
 */
const APIKey = () => {
  const apiKey = 'api-key-1234567890abcdef';
  return (
    <div className="container bg-tertiary rounded-lg p-6">
      {' '}
      <h1 className="text-2xl my-4 capitalize">Manage Your API Key</h1>
      <div className="flex flex-col gap-4">
        <Input.Password value={apiKey} size="large" className="rounded-lg" />
        <Button type="primary" className="rounded-lg w-min">
          Change API Key
        </Button>
      </div>
    </div>
  );
};

export default APIKey;
