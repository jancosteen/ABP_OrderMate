using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Abp.Authorization;
using Abp.Domain.Repositories;
using MDR_Angular.Authorization;
using MDR_Angular.OrderMate.Advertisements.Dto;

namespace MDR_Angular.OrderMate.Advertisements
{
    [AbpAuthorize(PermissionNames.Pages_A)]
    public class AdvertisementAppService : AsyncCrudAppService<
        Advertisement, AdvertisementDto, int, PagedAndSortedResultRequestDto, AdvertisementDto>, IAdvertisementAppService
    {
        public AdvertisementAppService(IRepository<Advertisement> repository) : base(repository) { }
    }
}
