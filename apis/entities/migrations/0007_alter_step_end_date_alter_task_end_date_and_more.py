# Generated by Django 4.2.6 on 2023-10-28 07:56

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('entities', '0006_alter_note_updated_at_alter_reply_updated_at_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='step',
            name='end_date',
            field=models.DateTimeField(default=datetime.datetime(2023, 10, 28, 13, 26, 14, 384251), null=True),
        ),
        migrations.AlterField(
            model_name='task',
            name='end_date',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2023, 10, 28, 13, 26, 14, 385233), null=True),
        ),
        migrations.AlterField(
            model_name='task',
            name='start_date',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2023, 10, 28, 13, 26, 14, 385215), null=True),
        ),
    ]