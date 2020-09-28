using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Abp.Authorization;
using Abp.Domain.Repositories;
using MDR_Angular.Authorization;
using System;
using System.Collections.Generic;
using System.Text;

namespace MDR_Angular.OrderMate.RestaurantAdvertisements
{
    [AbpAuthorize(PermissionNames.Pages_RA)]
    public class RestaurantAdvertisementAppService : AsyncCrudAppService<
        RestaurantAdvertisement, RestaurantAdvertisementDto, int, PagedAndSortedResultRequestDto, RestaurantAdvertisementDto>, IRestaurantAdvertisementAppService
    {
        public RestaurantAdvertisementAppService(IRepository<RestaurantAdvertisement> repository) : base(repository) { }
    }
}
