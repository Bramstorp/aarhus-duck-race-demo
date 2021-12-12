from fastapi import FastAPI, Depends, HTTPException, status, APIRouter

from ..models.ducks import Duck
from ..schemas.ducks import DuckIn_Pydantic, Duck_Pydantic


app = FastAPI()

router = APIRouter(
    tags=["ducks"],
    responses={404: {"description": "Not found"}},
)


@router.post('/ducks', response_model=Duck_Pydantic)
async def create_user(duck: DuckIn_Pydantic):
    duck_obj = Duck()
    await duck_obj.save()
    return await Duck_Pydantic.from_tortoise_orm(duck_obj)
