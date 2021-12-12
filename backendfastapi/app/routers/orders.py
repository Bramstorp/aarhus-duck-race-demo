from fastapi import FastAPI, Depends, HTTPException, status, APIRouter

from ..models.orders import Order
from ..schemas.orders import OrderIn_Pydantic, Order_Pydantic


app = FastAPI()

router = APIRouter(
    tags=["orders"],
    responses={404: {"description": "Not found"}},
)


@router.post('/order', response_model=Order_Pydantic)
async def create_user(order: OrderIn_Pydantic):
    order_obj = Order()
    await order_obj.save()
    return await Order_Pydantic.from_tortoise_orm(order_obj)
