from datetime import date
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from utils import get_db_handle
from bson.json_util import dumps
from pydantic import BaseModel
from fastapi.encoders import jsonable_encoder
import json


class Clubss(BaseModel):
    name: str
    description: str
    uuid: str


router = APIRouter(
    prefix="/api/clubs",
    tags=["clubs"],
    responses={404: {"description": "Not found"}},
)


@router.get("/allclubs")
async def get_clubs():
    fakeClubs = [
        {
            "name": "UVIC Programming Club",
            "description": "Uvic programming club focusing on competitive programming",
            "uuid": "2"
        },
        {
            "name": "Web Development Society",
            "description": "Society dedicated to web development and design",
            "uuid": "3"
        },
        {
            "name": "Data Science Association",
            "description": "Association for exploring and applying data science",
            "uuid": "4"
        },
        {
            "name": "Mobile App Developers Group",
            "description": "Group focusing on mobile app development",
            "uuid": "5"
        },
        {
            "name": "AI Research Club",
            "description": "Club dedicated to artificial intelligence research",
            "uuid": "6"
        },
        {
            "name": "Cybersecurity Society",
            "description": "Society promoting cybersecurity awareness and skills",
            "uuid": "7"
        },
        {
            "name": "Game Development Club",
            "description": "Club for game development enthusiasts",
            "uuid": "8"
        },
        {
            "name": "Robotics and Automation Society",
            "description": "Society exploring robotics and automation technologies",
            "uuid": "9"
        },
        {
            "name": "Blockchain Club",
            "description": "Club focused on blockchain technology and cryptocurrencies",
            "uuid": "10"
        },
        {
            "name": "Open Source Community",
            "description": "Community promoting open-source software and collaboration",
            "uuid": "11"
        }]
    json_data = json.dumps(fakeClubs)
    return json.loads(json_data)
