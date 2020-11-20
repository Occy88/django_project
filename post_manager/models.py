from django.db import models
from django.conf import settings


class Post(models.Model):
    """
    A Company Object.
    """
    title = models.TextField(unique=True, max_length=500)
    # custom url stored as text for each logo
    content = models.TextField(max_length=100000, null=True, blank=True)
    # images=m

    source=models.URLField()
    is_active = models.BooleanField(default=True, db_index=True)

    def delete(self, *args, **kwargs):
        """
        SOFT deactiavtion
        :param args:
        :param kwargs:
        :return:
        """
        self.is_active = False
        self.save()

        for item in self.image_set:
            item.delete()

    def restore(self, *args, **kwargs):
        self.is_active = True
        self.save()

        for item in self.image_set:
            item.restore()

    def __str__(self):
        return self.title

class Image(models.Model):
    post=models.ForeignKey(Post,on_delete=models.CASCADE)
    image=models.ImageField()

    is_active = models.BooleanField(default=True, db_index=True)

    def delete(self, *args, **kwargs):
        self.is_active = False
        self.save()

    def restore(self, *args, **kwargs):
        self.is_active = True
        self.save()

    def __str__(self):
        return self.post.id