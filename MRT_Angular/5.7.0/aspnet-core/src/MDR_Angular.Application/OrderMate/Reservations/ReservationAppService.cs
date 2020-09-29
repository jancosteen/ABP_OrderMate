using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Abp.Authorization;
using Abp.Domain.Repositories;
using MDR_Angular.Authorization;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace MDR_Angular.OrderMate.Reservations
{
    [AbpAuthorize(PermissionNames.Pages_R)]
    public class ReservationAppService : AsyncCrudAppService<
        Reservation, ReservationDto, int, PagedAndSortedResultRequestDto, ReservationDto>, IReservationAppService
    {
        public ReservationAppService(IRepository<Reservation> repository) : base(repository) { }
        protected override IQueryable<Reservation> CreateFilteredQuery(PagedAndSortedResultRequestDto input)
        {
            return base.CreateFilteredQuery(input)
                .Include(i => i.ReservationRestaurant).ThenInclude(x => x.RestaurantIdFkNavigation)
                .Include(i => i.ReservationStatusIdFkNavigation).ThenInclude(x => x.ReservationStatus1)
                .Include(i => i.Seating)
                .Include(i => i.UserIdFkNavigation);
        }
    }
}
