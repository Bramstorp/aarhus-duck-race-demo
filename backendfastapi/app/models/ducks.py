from tortoise.models import Model 
from tortoise import fields 


class Duck(Model):
    id = fields.IntField(pk=True)