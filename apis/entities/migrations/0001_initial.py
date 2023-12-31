# Generated by Django 4.2.6 on 2023-10-16 15:32

import apis.entities.models
import datetime
from django.conf import settings
import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('utilities', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Asset',
            fields=[
                ('id', models.BigIntegerField(auto_created=True, null=True, serialize=False, verbose_name='ID')),
                ('uid', models.CharField(default=None, max_length=255, primary_key=True, serialize=False)),
                ('name', models.CharField(db_index=True, max_length=200)),
                ('created_at', models.DateTimeField(auto_now_add=True, null=True)),
                ('updated_at', models.DateTimeField(blank=True, default=datetime.datetime(2023, 10, 16, 21, 2, 15, 790843), null=True)),
                ('asset_type', models.CharField(choices=[('Fx', 'Fx'), ('Set', 'Set'), ('Vehicle', 'Vehicle'), ('Prop', 'Prop'), ('Character', 'Character'), ('NA', 'NA')], default='NA', max_length=10)),
                ('entity_type', models.CharField(default='Asset', max_length=20)),
                ('prefix', models.CharField(blank=True, max_length=250)),
                ('client_name', models.CharField(blank=True, max_length=250)),
                ('description', models.TextField(blank=True, max_length=100)),
            ],
            options={
                'ordering': ['uid'],
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Episode',
            fields=[
                ('id', models.BigIntegerField(auto_created=True, null=True, serialize=False, verbose_name='ID')),
                ('uid', models.CharField(default=None, max_length=255, primary_key=True, serialize=False)),
                ('name', models.CharField(db_index=True, max_length=200)),
                ('created_at', models.DateTimeField(auto_now_add=True, null=True)),
                ('updated_at', models.DateTimeField(blank=True, default=datetime.datetime(2023, 10, 16, 21, 2, 15, 790843), null=True)),
                ('description', models.TextField(blank=True, null=True)),
                ('entity_type', models.CharField(default='Episode', max_length=20)),
                ('assets', models.ManyToManyField(blank=True, default=[], to='entities.asset')),
            ],
            options={
                'ordering': ['uid'],
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.BigIntegerField(auto_created=True, null=True, serialize=False, verbose_name='ID')),
                ('uid', models.CharField(default=None, max_length=255, primary_key=True, serialize=False)),
                ('name', models.CharField(db_index=True, max_length=200)),
                ('created_at', models.DateTimeField(auto_now_add=True, null=True)),
                ('updated_at', models.DateTimeField(blank=True, default=datetime.datetime(2023, 10, 16, 21, 2, 15, 790843), null=True)),
                ('code', models.CharField(max_length=5, unique=True, validators=[django.core.validators.RegexValidator('^[A-Z0-9]*$', 'only UPPERCASE letter are allowed')])),
                ('start_date', models.DateField(auto_now_add=True, null=True)),
                ('entity_type', models.CharField(default='Project', max_length=20)),
                ('duration', models.IntegerField(default=1)),
                ('due_date', models.DateField(null=True)),
                ('resolution', models.CharField(max_length=9, validators=[django.core.validators.RegexValidator('^\\d{1,4}X\\d{1,4}$', 'Enter valid resolution')])),
                ('start_frame', models.IntegerField(default=101)),
                ('fps', models.FloatField(default=24.0)),
                ('is_episodic', models.BooleanField(default=True)),
                ('is_active', models.BooleanField(default=True)),
                ('thumbnail', models.ImageField(default='defaults/project_pic.png', upload_to=apis.entities.models.get_project_thumbnail_path)),
                ('cg_supervisor', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='cg_supervisor', to=settings.AUTH_USER_MODEL)),
                ('users', models.ManyToManyField(blank=True, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'ordering': ['uid'],
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Sequence',
            fields=[
                ('id', models.BigIntegerField(auto_created=True, null=True, serialize=False, verbose_name='ID')),
                ('uid', models.CharField(default=None, max_length=255, primary_key=True, serialize=False)),
                ('name', models.CharField(db_index=True, max_length=200)),
                ('created_at', models.DateTimeField(auto_now_add=True, null=True)),
                ('updated_at', models.DateTimeField(blank=True, default=datetime.datetime(2023, 10, 16, 21, 2, 15, 790843), null=True)),
                ('description', models.TextField(blank=True, max_length=100)),
                ('entity_type', models.CharField(default='Sequence', max_length=20)),
                ('assets', models.ManyToManyField(blank=True, default=[], to='entities.asset')),
                ('episode', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='entities.episode')),
                ('project', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='entities.project')),
            ],
            options={
                'ordering': ['uid'],
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Shot',
            fields=[
                ('id', models.BigIntegerField(auto_created=True, null=True, serialize=False, verbose_name='ID')),
                ('uid', models.CharField(default=None, max_length=255, primary_key=True, serialize=False)),
                ('name', models.CharField(db_index=True, max_length=200)),
                ('created_at', models.DateTimeField(auto_now_add=True, null=True)),
                ('updated_at', models.DateTimeField(blank=True, default=datetime.datetime(2023, 10, 16, 21, 2, 15, 790843), null=True)),
                ('description', models.TextField(blank=True, max_length=100)),
                ('entity_type', models.CharField(default='Shot', max_length=20)),
                ('start_frame', models.IntegerField(default=101)),
                ('end_frame', models.IntegerField(default=102)),
                ('assets', models.ManyToManyField(blank=True, default=[], to='entities.asset')),
                ('episode', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='entities.episode')),
                ('project', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='entities.project')),
                ('sequence', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='entities.sequence')),
            ],
            options={
                'ordering': ['uid'],
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Step',
            fields=[
                ('id', models.BigIntegerField(auto_created=True, null=True, serialize=False, verbose_name='ID')),
                ('uid', models.CharField(default=None, max_length=255, primary_key=True, serialize=False)),
                ('name', models.CharField(db_index=True, max_length=200)),
                ('created_at', models.DateTimeField(auto_now_add=True, null=True)),
                ('updated_at', models.DateTimeField(blank=True, default=datetime.datetime(2023, 10, 16, 21, 2, 15, 790843), null=True)),
                ('entity_type', models.CharField(default='Step', max_length=20)),
                ('start_date', models.DateTimeField(auto_now_add=True, null=True)),
                ('end_date', models.DateTimeField(blank=True, default=datetime.datetime(2023, 10, 16, 21, 2, 15, 797655), null=True)),
                ('duration', models.IntegerField(default=0)),
                ('retakes', models.PositiveSmallIntegerField(default=0)),
                ('asset', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='entities.asset')),
                ('episode', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='entities.episode')),
                ('project', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='entities.project')),
                ('sequence', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='entities.sequence')),
                ('shot', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='entities.shot')),
                ('status', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='utilities.status')),
            ],
            options={
                'ordering': ['uid'],
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Task',
            fields=[
                ('id', models.BigIntegerField(auto_created=True, null=True, serialize=False, verbose_name='ID')),
                ('uid', models.CharField(default=None, max_length=255, primary_key=True, serialize=False)),
                ('name', models.CharField(db_index=True, max_length=200)),
                ('created_at', models.DateTimeField(auto_now_add=True, null=True)),
                ('updated_at', models.DateTimeField(blank=True, default=datetime.datetime(2023, 10, 16, 21, 2, 15, 790843), null=True)),
                ('version', models.IntegerField(default=1)),
                ('entity_type', models.CharField(default='Task', max_length=15)),
                ('priority', models.CharField(choices=[('low', 'low'), ('medium', 'medium'), ('high', 'high')], default='low', max_length=15)),
                ('start_date', models.DateTimeField(blank=True, default=datetime.datetime(2023, 10, 16, 21, 2, 15, 798602), null=True)),
                ('end_date', models.DateTimeField(blank=True, default=datetime.datetime(2023, 10, 16, 21, 2, 15, 798620), null=True)),
                ('duration', models.IntegerField(default=1)),
                ('asset', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='entities.asset')),
                ('episode', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='entities.episode')),
                ('project', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='entities.project')),
                ('reviewer', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL)),
                ('sequence', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='entities.sequence')),
                ('shot', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='entities.shot')),
                ('status', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='utilities.status')),
                ('step', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='entities.step')),
            ],
            options={
                'ordering': ['uid'],
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='UserTask',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('bid', models.IntegerField(default=0)),
                ('assign_date', models.DateTimeField(auto_now_add=True)),
                ('start_date', models.DateTimeField(null=True)),
                ('stop_date', models.DateTimeField(null=True)),
                ('duration', models.IntegerField(default=0)),
                ('project', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='entities.project')),
                ('status', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='utilities.status')),
                ('step', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='step_users', to='entities.step')),
                ('task', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='task_users', to='entities.task')),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.AddField(
            model_name='episode',
            name='project',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='entities.project'),
        ),
        migrations.AddField(
            model_name='asset',
            name='project',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='entities.project'),
        ),
    ]
