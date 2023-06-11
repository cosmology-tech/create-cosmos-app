import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  UseDisclosureReturn,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  TabIndicator,
  Text,
} from '@chakra-ui/react';
import { useColor } from 'hooks';
import React from 'react';
import { isGtZero } from 'utils';
import { Collection, SaleType, Token } from '../../types';
import { ListTab } from '../nft/list-tab';
import { SellNowTab } from '../nft/sell-now-tab';

const inputTitle = {
  [SaleType.FIXED_PRICE]: 'Sale Price',
  [SaleType.AUCTION]: 'Minimum Offer',
};

export const NftSaleModal = ({
  modalControl,
  token,
  collection,
  price,
  update,
}: {
  token: Token;
  modalControl: UseDisclosureReturn;
  price: number;
  collection: Collection;
  update: () => void;
}) => {
  const { isOpen, onClose } = modalControl;

  const hasOffer = isGtZero(token.highestCollectionBid);

  const tabNames = ['Fixed Price', 'Auction'].concat(
    hasOffer ? ['Sell Now'] : []
  );

  const { textColor, bgColor, bgTabListColor } = useColor();

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="lg">
      <ModalOverlay />
      <ModalContent bg={bgColor.primary}>
        <ModalHeader>List for Sale</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Tabs variant="unstyled" align="center" isFitted isLazy>
            <TabList bg={bgTabListColor} h="56px" borderRadius="full">
              {tabNames.map((title) => (
                <Tab
                  key={title}
                  color={textColor.secondary}
                  _selected={{ color: textColor.tertiary }}
                  zIndex="100"
                >
                  <Text fontWeight="600" fontSize="14px" lineHeight="16px">
                    {title}
                  </Text>
                </Tab>
              ))}
            </TabList>
            <TabIndicator
              bg={bgColor.secondary}
              height="48px"
              ml="4px"
              css={{ width: `${hasOffer ? '146' : '224'}px !important` }}
              borderRadius="full"
              transform="translateY(-52px)"
            />
            <TabPanels>
              {Object.values(SaleType).map((saleType) => (
                <TabPanel p="0" key={saleType}>
                  <ListTab
                    closeModal={modalControl.onClose}
                    inputTitle={inputTitle[saleType]}
                    price={price}
                    saleType={saleType}
                    token={token}
                    collection={collection}
                    update={update}
                  />
                </TabPanel>
              ))}
              <TabPanel p="0">
                <SellNowTab
                  token={token}
                  update={update}
                  collection={collection}
                  closeModal={modalControl.onClose}
                />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
