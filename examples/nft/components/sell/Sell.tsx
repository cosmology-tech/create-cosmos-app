import { Box, Text, Spinner, useColorModeValue, NftProfile, BasicModal, NftTransfer } from '@interchain-ui/react';
import { useSell, useBurn, useTransfer, useUnlist, useUpdatePrice, useDetails, useListForSale } from '@/hooks/sell';
import { Burn, Unlist, Detail, UpdatePrice, ListForSale } from '.';

export function Sell() {
  const {
    address, name, meta, list, token,
    collection, isVerified, queries, isLoading,
    floorPrice, highestBid, openStargazeProfile,
    modal: detailsModal, toggleModal: toggleDetailsModal
  } = useSell();

  const {
    image, traits, creator,
    lastSale, mintPrice,
    onShare, onDownload
  } = useDetails(token, collection);

  const { 
    onTransfer, onRecipientChange,
    modal: transferModal, toggleModal: toggleTransferModal
  } = useTransfer(token, {
    success: () => queries.tokens.refetch()
  });

  const {
    onBurn, modal: burnModal, toggleModal: toggleBurnModal
  } = useBurn(token, {
    success: () => queries.tokens.refetch()
  });

  const {
    onUnlist, isLoading: isUnlisting, modal: unlistModal, toggleModal: toggleUnlistModal
  } = useUnlist(token, {
    success: () => queries.tokens.refetch()
  });

  const {
    price, onUpdatePrice, onPriceChange, isLoading: isUpdatingPrice,
    modal: priceModal, toggleModal: togglePriceModal
  } = useUpdatePrice(token, {
    success: () => queries.tokens.refetch()
  });

  const {
    fixed, auction, sellnow,
    modal: listModal, toggleModal: toggleListModal
  } = useListForSale(token, {
    success: () => queries.tokens.refetch()
  });

  const Loading = <Box position="absolute" top="$10" right="$10">
    <Spinner size="$5xl" color={useColorModeValue('$blackAlpha800', '$whiteAlpha900') } />;
  </Box>

  if (!address) {
    return (
      <Box display="flex" alignItems="center" justifyContent="center">
        <Text fontSize="$lg">Please connect to your wallet.</Text>
      </Box>
    )
  }

  return (
    <Box
      py="$16" mx="auto" maxWidth="56rem"
      boxShadow="$lg" borderRadius="$lg" display="flex" justifyContent="center"
      position="relative" borderWidth="1px" borderStyle="$solid" borderColor="$gray100"
    >
      <NftProfile
        name={name}
        title="Profile"
        list={list}
        meta={meta}
        onView={openStargazeProfile}
        isVerified={isVerified}
        attributes={{ minWidth: '50rem' }}
        headerButtonLabel="View on Stargaze"
      />
      
      {isLoading ? Loading : null}

      <BasicModal isOpen={detailsModal.open} title={detailsModal.title} onClose={toggleDetailsModal}>
        <Detail
          info={{ lastSale: +lastSale, isNameVerified: isVerified }}
          token={token}
          price={price}
          collection={collection}
          traits={traits}
          image={image}
          owner={name}
          creator={creator}
          mintPrice={mintPrice}
          onBurn={toggleBurnModal}
          onShare={onShare}
          onDownload={onDownload}
          onTransfer={toggleTransferModal}
          onListForSale={toggleListModal}
          onUpdatePrice={togglePriceModal}
          onRemoveListing={toggleUnlistModal}
        />

        <BasicModal isOpen={transferModal.open} title={transferModal.title} onClose={toggleTransferModal}>
          <NftTransfer
            onCancel={toggleTransferModal}
            onChange={onRecipientChange}
            onTransfer={onTransfer}
          />
        </BasicModal>

        <BasicModal isOpen={burnModal.open} title={burnModal.title} onClose={toggleBurnModal}>
          <Burn onBurn={onBurn} onCancal={toggleBurnModal} />
        </BasicModal>

        <BasicModal isOpen={unlistModal.open} title={unlistModal.title} onClose={toggleUnlistModal}>
          <Unlist isLoading={isUnlisting} onUnlist={onUnlist} onCancal={toggleUnlistModal} />
        </BasicModal>

        <BasicModal isOpen={priceModal.open} title={priceModal.title} onClose={togglePriceModal}>
          <UpdatePrice
            token={token}
            price={price}
            floorPrice={floorPrice}
            highestBid={highestBid}
            isLoading={isUpdatingPrice}
            onUpdate={onUpdatePrice}
            onCancel= {togglePriceModal}
            onChange={onPriceChange}
          />
        </BasicModal>

        <BasicModal isOpen={listModal.open} title={listModal.title} onClose={toggleListModal}>
          <ListForSale
            token={token}
            fixed={fixed}
            auction={auction}
            sellnow={sellnow}
            floorPrice={floorPrice}
            highestBid={highestBid}
          />
        </BasicModal>
      </BasicModal> 
    </Box>
  )
}