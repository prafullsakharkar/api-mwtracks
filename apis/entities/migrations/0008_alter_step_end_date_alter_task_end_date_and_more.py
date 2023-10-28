# Generated by Django 4.2.6 on 2023-10-28 08:15

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('entities', '0007_alter_step_end_date_alter_task_end_date_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='step',
            name='end_date',
            field=models.DateTimeField(default=datetime.datetime(2023, 10, 28, 13, 45, 1, 973221), null=True),
        ),
        migrations.AlterField(
            model_name='task',
            name='end_date',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2023, 10, 28, 13, 45, 1, 974184), null=True),
        ),
        migrations.AlterField(
            model_name='task',
            name='start_date',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2023, 10, 28, 13, 45, 1, 974166), null=True),
        ),
    ]
