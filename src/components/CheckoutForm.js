import React from "react";
import { Form, Input, Select, Button as AntButton } from "antd";

const { Option } = Select;

const CheckoutForm = ({ cartItems, onSubmit }) => {
  const [form] = Form.useForm();
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingFee = 5.0;

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-10">🛒 Thanh toán đơn hàng</h2>
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Form thông tin */}
        <div className="bg-white p-8 rounded-xl shadow-lg border">
          <Form
            form={form}
            layout="vertical"
            onFinish={onSubmit}
            size="large"
            className="space-y-4"
          >
            <Form.Item label="Họ và tên" name="name" rules={[{ required: true, message: "Vui lòng nhập họ tên" }]}>
              <Input placeholder="Nguyễn Văn A" />
            </Form.Item>

            <Form.Item label="Địa chỉ" name="address" rules={[{ required: true, message: "Vui lòng nhập địa chỉ" }]}>
              <Input placeholder="123 Đường ABC, Quận 1, TP.HCM" />
            </Form.Item>

            <Form.Item label="Số điện thoại" name="phone" rules={[{ required: true, message: "Vui lòng nhập số điện thoại" }]}>
              <Input placeholder="0123456789" />
            </Form.Item>

            <Form.Item label="Phương thức thanh toán" name="payment" rules={[{ required: true }]}>
              <Select placeholder="Chọn phương thức thanh toán">
                <Option value="cod">Thanh toán khi nhận hàng</Option>
                <Option value="card">Thẻ tín dụng</Option>
              </Select>
            </Form.Item>

            <Form.Item label="Mã giảm giá" name="coupon">
              <Input placeholder="Nhập mã (nếu có)" />
            </Form.Item>

            <AntButton type="primary" htmlType="submit" className="w-full mt-4 text-lg h-12">
              ✅ Đặt hàng ngay
            </AntButton>
          </Form>
        </div>

        {/* Tóm tắt đơn hàng */}
        <div className="bg-gray-50 p-8 rounded-xl shadow-lg border">
          <h3 className="text-xl font-semibold mb-6">📦 Tóm tắt đơn hàng</h3>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between text-sm border-b pb-2">
                <span>{item.name} × {item.quantity}</span>
                <span className="font-medium text-gray-800">${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}

            <div className="flex justify-between text-sm pt-2">
              <span>Phí vận chuyển</span>
              <span>${shippingFee.toFixed(2)}</span>
            </div>

            <div className="flex justify-between text-lg font-bold border-t pt-4">
              <span>Tổng cộng</span>
              <span>${(total + shippingFee).toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
