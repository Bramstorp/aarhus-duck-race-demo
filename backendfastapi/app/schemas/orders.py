from tortoise.contrib.pydantic import pydantic_model_creator
from ..models.orders import Order

Order_Pydantic = pydantic_model_creator(Order, name='Order')
OrderIn_Pydantic = pydantic_model_creator(Order, name='OrderIn', exclude_readonly=True)