from tortoise.models import Model 
from tortoise import fields 


class Order(Model):
    id = fields.IntField(pk=True)
    phone = fields.IntField()
    duck = fields.ForeignKeyField("models.Duck", related_name="duck")