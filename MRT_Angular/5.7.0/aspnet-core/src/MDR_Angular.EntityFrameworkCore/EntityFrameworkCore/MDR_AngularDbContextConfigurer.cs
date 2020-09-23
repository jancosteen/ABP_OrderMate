using System.Data.Common;
using Microsoft.EntityFrameworkCore;

namespace MDR_Angular.EntityFrameworkCore
{
    public static class MDR_AngularDbContextConfigurer
    {
        public static void Configure(DbContextOptionsBuilder<MDR_AngularDbContext> builder, string connectionString)
        {
            builder.UseSqlServer(connectionString);
        }

        public static void Configure(DbContextOptionsBuilder<MDR_AngularDbContext> builder, DbConnection connection)
        {
            builder.UseSqlServer(connection);
        }
    }
}
