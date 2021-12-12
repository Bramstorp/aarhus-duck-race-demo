from tortoise.contrib.pydantic import pydantic_model_creator
from ..models.ducks import Duck

Duck_Pydantic = pydantic_model_creator(Duck, name='Duck')
DuckIn_Pydantic = pydantic_model_creator(Duck, name='DuckIn', exclude_readonly=True)