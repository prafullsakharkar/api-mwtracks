FROM python:3.12

ENV PYTHONUNBUFFERED 1
ENV PYTHONDONTWRITEBYTECODE 1

# install system dependencies
RUN apt-get update

RUN pip install --upgrade pip

COPY ./requirements.txt .
RUN pip install -r requirements.txt

COPY . /mwtracks
WORKDIR /mwtracks
EXPOSE 8000

COPY ./entrypoint.sh .
ENTRYPOINT ["sh", "/mwtracks/entrypoint.sh"]
