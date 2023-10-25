# Generated by Django 4.2.6 on 2023-10-21 09:54

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('entities', '0002_note_rename_version_task_version_number_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='asset',
            name='updated_at',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2023, 10, 21, 15, 24, 30, 453834), null=True),
        ),
        migrations.AlterField(
            model_name='episode',
            name='updated_at',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2023, 10, 21, 15, 24, 30, 453834), null=True),
        ),
        migrations.AlterField(
            model_name='note',
            name='updated_at',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2023, 10, 21, 15, 24, 30, 465536), null=True),
        ),
        migrations.AlterField(
            model_name='project',
            name='updated_at',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2023, 10, 21, 15, 24, 30, 453834), null=True),
        ),
        migrations.AlterField(
            model_name='reply',
            name='updated_at',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2023, 10, 21, 15, 24, 30, 467440), null=True),
        ),
        migrations.AlterField(
            model_name='sequence',
            name='updated_at',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2023, 10, 21, 15, 24, 30, 453834), null=True),
        ),
        migrations.AlterField(
            model_name='shot',
            name='updated_at',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2023, 10, 21, 15, 24, 30, 453834), null=True),
        ),
        migrations.AlterField(
            model_name='step',
            name='end_date',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2023, 10, 21, 15, 24, 30, 460805), null=True),
        ),
        migrations.AlterField(
            model_name='step',
            name='updated_at',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2023, 10, 21, 15, 24, 30, 453834), null=True),
        ),
        migrations.AlterField(
            model_name='task',
            name='end_date',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2023, 10, 21, 15, 24, 30, 461764), null=True),
        ),
        migrations.AlterField(
            model_name='task',
            name='start_date',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2023, 10, 21, 15, 24, 30, 461746), null=True),
        ),
        migrations.AlterField(
            model_name='task',
            name='updated_at',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2023, 10, 21, 15, 24, 30, 453834), null=True),
        ),
        migrations.AlterField(
            model_name='version',
            name='updated_at',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2023, 10, 21, 15, 24, 30, 453834), null=True),
        ),
    ]
