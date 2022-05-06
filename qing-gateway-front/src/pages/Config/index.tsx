import { useRequest } from "ice"
import { useEffect } from "react"
import { getCurrentConfig, reset } from '@/api/GlobalService'
import { Button, Form, Input, InputNumber,Popconfirm } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';


export default function Config() {
  const { loading, request: getConfig } = useRequest(getCurrentConfig, {
    onSuccess(data, params) {
      console.log(data)
    },
  })
  const { request: resetInfo } = useRequest(reset)
  const [form] = Form.useForm()
  useEffect(() => {
    (async () => {
      let data: any = await getConfig();
      const IP = data.nacosInfo.address.split(":")[0];
      const PORT = data.nacosInfo.address.split(":")[1];
      const websocketUriList = data.websocketInfoList.map(item => item.uri.slice(5));
      console.log(websocketUriList, '123')
      form.setFieldsValue({
        IP: IP,
        PORT: PORT,
        websocketUriList: websocketUriList
      });
    })()
  }, [])
  const confirm = async () => {
    form.validateFields().then(async (values) => {
      const data = {
        nacosServerAddr: values.IP + ":" + values.PORT,
        websocketUriList: values.websocketUriList.map(item => "ws://" + item)
      }
      await resetInfo(data)
      await getConfig()
    });
  }
  return (
    <div>
      <Form layout="vertical" labelAlign="right" form={form}>
        <Form.Item label="更改nacos地址" name="IP"
          rules={[{ required: true, message: '请输入有效IP!', pattern: /^(1\d{2}|2[0-4]\d|25[0-5]|[1-9]\d|[0-9])\.((1\d{2}|2[0-4]\d|25[0-5]|[1-9]\d|\d)\.){2}(1\d{2}|2[0-4]\d|25[0-5]|[1-9]\d|\d)$/ }]}>
          <Input addonBefore="IP:" style={{ width: '30%' }}></Input>
        </Form.Item>
        <Form.Item name="PORT" rules={[{ required: true, message: '请输入PORT!' }]}>
          <InputNumber addonBefore="PORT:" min={0} max={65535} style={{ width: "30%" }}></InputNumber>
        </Form.Item>
        <Form.List
          name="websocketUriList"
          rules={[
            {
              validator: async (_, names) => {
                if (!names || names.length < 1) {
                  return Promise.reject(new Error('至少 1 个 ws'));
                }
              },
            },
          ]}
        >
          {(fields, { add, remove }, { errors }) => (
            <>
              {fields.map((field, index) => (
                <Form.Item
                  label={index === 0 ? '更改ws地址' : ''}
                  required={false}
                  key={field.key}
                >
                  <Form.Item
                    {...field}
                    validateTrigger={['onChange', 'onBlur']}
                    rules={[
                      {
                        required: true,
                        whitespace: true,
                        message: "输入ws地址",
                      },
                    ]}
                    noStyle
                  >
                    <Input placeholder="地址" style={{ width: '30%' }} addonBefore="ws://" />
                  </Form.Item>
                  {fields.length > 1 ? (
                    <MinusCircleOutlined
                      style={{ "marginLeft": "0.5rem", "width": "2rem" }}
                      onClick={() => remove(field.name)}
                    />
                  ) : null}
                </Form.Item>
              ))}
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  // style={{ width: '100%' }}
                  icon={<PlusOutlined />}
                >
                  添加ws地址，至少一项
                </Button>
                <Form.ErrorList errors={errors} />
              </Form.Item>
            </>
          )}
        </Form.List>
      </Form>
      <Popconfirm
        title="你确定要更改吗"
        onConfirm={confirm}
        okText="Yes"
        cancelText="No"
      >
        <a href="#">确认更改</a>
      </Popconfirm>
    </div>
  )
}
