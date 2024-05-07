import axios from "axios";
import OrdersList from "../Components/OrdersList";
import { useLocation } from "react-router";
import Navbar from "../Components/HomeNavbar";

const CustomerOrders = () => {

  const location = useLocation();
  var {userToken, isAdmin, firstName, lastName} = location.state || {};

  const getOrders = async () => {
    console.log("In get orders");
    try {
      const response = await axios(
        `http://localhost:9080/api/customerOrders/getOrders`,
        {
          method: "GET",
          headers: {
            'Authorization': `Bearer ${userToken}`,
          },
        }
      );
      
      const orders: Order[] = response.data;
      
      console.log(orders)
      return orders;
    } catch (error) {
      console.log("Error:", error);
      const orders: Order[] = [];
      return orders;
    }
  };
  const handleCheckout = async (order: Order) => {
    const orderId = order.id; // Lấy id của đơn hàng từ đối tượng order
    console.log("Order id is", orderId);
    try {
        const response = await axios(
            `http://localhost:9080/api/payment/submitOrder?id=${orderId}`, // Sử dụng orderId thay vì id
            {
                method: "POST",
                headers: {
                    'Authorization': `Bearer ${userToken}`,
                },
            }
        );
        
        // Sử dụng regular expression để lấy phần link từ response data
        const redirectUrlRegex = /redirect:(.*)/;
        const match = response.data.match(redirectUrlRegex);
        if (match && match.length > 1) {
            const redirectUrl = match[1].trim(); // Lấy phần link từ capture group thứ 1
            // Thực hiện chuyển hướng đến đường dẫn lấy được
            window.location.href = redirectUrl;
        } else {
            console.log("Redirect link not found in response");
        }
    } catch (error) {
        console.log("Error:", error);
    }
};


  return (
    <div>
      <Navbar 
          firstName = {firstName}
          lastName = {lastName}
          isAdmin = {isAdmin}
          token = {userToken}
      />
     

      <OrdersList 
        getOrders={getOrders}
        deleteOrder={async () => "Not Required"}
        deleteOrderItem={async () => "Not Required"}
        updateOrderStatus={async () => "Not Required"}
        isAdmin={isAdmin}
        firstName={firstName}
        lastName={lastName}
        userToken={userToken} 
        getSortedOrders={function (sortBy: any, sortOrder: any): Promise<Order[]> {
          throw new Error("Function not implemented.");
        } } 
        handleCheckout={handleCheckout}
        getFilteredOrders={function (filter: FilterOrderDto): Promise<Order[]> {
          throw new Error("Function not implemented.");
        } }      
      />
    </div>
  );
};

export default CustomerOrders;
