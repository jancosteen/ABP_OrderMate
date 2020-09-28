using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Abp.Authorization;
using Abp.Domain.Repositories;
using MDR_Angular.Authorization;
using System;
using System.Collections.Generic;
using System.Text;

namespace MDR_Angular.OrderMate.Reservations
{
    [AbpAuthorize(PermissionNames.Pages_R)]
    public class ReservationAppService : AsyncCrudAppService<
        Reservation, ReservationDto, int, PagedAndSortedResultRequestDto, ReservationDto>, IReservationAppService
    {
        public ReservationAppService(IRepository<Reservation> repository) : base(repository) { }
    }
}
