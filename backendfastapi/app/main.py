from fastapi import FastAPI
from tortoise.contrib.fastapi import register_tortoise
from tortoise import Tortoise
from fastapi.middleware.cors import CORSMiddleware

from .routers import users


from .config import settings

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:3000",
    "http://localhost:8000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(users.router)

@app.get("/")
async def root():
    return "Home"

def get_db_uri(user, passwd, host, db):
    return f"postgres://{user}:{passwd}@{host}:5432/{db}"

Tortoise.init_models(['app.models.users'], 'models')

register_tortoise(
    app, 
    db_url=get_db_uri(
        user=settings.POSTGRESQL_USERNAME,
        passwd=settings.POSTGRESQL_PASSWORD,
        host=settings.POSTGRESQL_HOSTNAME,
        db=settings.POSTGRESQL_DATABASE
    ),
    modules={
        'models': [
            'app.models.users',
        ],
    },
    generate_schemas=True,
    add_exception_handlers=True,
)