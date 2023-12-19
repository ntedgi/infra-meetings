#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main() {
   char *description;
   description = malloc( 30 * sizeof(char) );
   if( description == NULL ) {
      fprintf(stderr, "Error - unable to allocate required memory\n");
   } else {
      strcpy( description, "i allocated 30 bytes");
   }
   free(description);
}