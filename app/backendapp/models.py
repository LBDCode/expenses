from django.db import models

# Create your models here.
class Users(models.Model):
    last_name = models.CharField(max_length=30, null=False)
    first_name = models.CharField(max_length=30)
    default_approver = models.CharField(max_length=30, null=False)


class Reports(models.Model):
    user_id = models.IntegerField()
    approver_id = models.IntegerField()
    date_created = models.DateField()
    submitted_approval = models.BooleanField(default=False)
    date_submitted = models.DateField()
    date_approved = models.DateField()


class Transactions(models.Model):
    report_id = models.IntegerField()
    category = [
        ('airfare', 'Airfare'),
        ('lodging', 'Lodging'),
        ('meals_entertainment', 'Meals & Entertainment'),
        ('fees_dues', 'Professional Fees and Dues'),
        ('tolls', 'Tolls'),
        ('taxi_transportation', 'Taxis or Other Transportation'),
        ('office_supplies', 'Office Supplies'),
        ('mileage', 'Mileage'),
        ('fuel', 'Gasoline/Fuel')
    ]
    amount = models.DecimalField(max_digits=6, decimal_places=2)
    transaction_date = models.DateField()

