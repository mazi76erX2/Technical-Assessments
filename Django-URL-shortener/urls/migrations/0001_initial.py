# Generated by Django 3.2.4 on 2021-06-26 03:26

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Url',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('original_url', models.CharField(max_length=256, unique=True)),
                ('shortened_url', models.CharField(max_length=24)),
                ('created_on', models.DateTimeField(auto_now_add=True)),
                ('random_string', models.CharField(max_length=6, unique=True)),
            ],
        ),
    ]
