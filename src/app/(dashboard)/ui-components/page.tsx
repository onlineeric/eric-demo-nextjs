'use client';
import { useState } from 'react';
import {
  Button,
  Input,
  Textarea,
  Select,
  SelectItem,
  Checkbox,
  Switch,
  Slider,
  Card,
  CardBody,
  CardHeader,
  Chip,
  Avatar,
  Progress,
  Badge,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Tabs,
  Tab,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Code,
  Divider
} from '@heroui/react';

export default function UIComponentsPage() {
  const [inputValue, setInputValue] = useState('');
  const [textareaValue, setTextareaValue] = useState('');
  const [selectValue, setSelectValue] = useState<Set<string>>(new Set([]));
  const [isChecked, setIsChecked] = useState(false);
  const [isToggled, setIsToggled] = useState(false);
  const [sliderValue, setSliderValue] = useState(30);
  const [progressValue, setProgressValue] = useState(45);
  const [selectedTab, setSelectedTab] = useState('tab1');
  
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const animals = [
    { key: 'cat', label: 'Cat' },
    { key: 'dog', label: 'Dog' },
    { key: 'elephant', label: 'Elephant' },
    { key: 'lion', label: 'Lion' },
    { key: 'tiger', label: 'Tiger' },
    { key: 'giraffe', label: 'Giraffe' }
  ];

  const tableData = [
    { id: 1, name: 'Tony Reichert', role: 'CEO', status: 'Active' },
    { id: 2, name: 'Zoey Lang', role: 'Technical Lead', status: 'Paused' },
    { id: 3, name: 'Jane Fisher', role: 'Senior Developer', status: 'Active' },
    { id: 4, name: 'William Howard', role: 'Community Manager', status: 'Vacation' }
  ];

  return (
    <div className="p-6 space-y-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">UI Components Demo</h1>
        <p className="text-gray-600">
          A showcase of HeroUI components with functional state management for easy reference and reuse.
        </p>
      </div>

      {/* Buttons Section */}
      <Card>
        <CardHeader>
          <h2 className="text-xl font-semibold">Buttons</h2>
        </CardHeader>
        <CardBody>
          <div className="flex gap-3 flex-wrap">
            <Button color="primary">Primary</Button>
            <Button color="secondary">Secondary</Button>
            <Button color="success">Success</Button>
            <Button color="warning">Warning</Button>
            <Button color="danger">Danger</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="flat">Flat</Button>
            <Button variant="bordered">Bordered</Button>
            <Button isLoading>Loading</Button>
            <Button isDisabled>Disabled</Button>
          </div>
        </CardBody>
      </Card>

      {/* Form Controls Section */}
      <Card>
        <CardHeader>
          <h2 className="text-xl font-semibold">Form Controls</h2>
        </CardHeader>
        <CardBody>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <Input
                label="Input Field"
                placeholder="Enter some text"
                value={inputValue}
                onValueChange={setInputValue}
                description={`Current value: "${inputValue}"`}
                variant="bordered"
                color="primary"
              />
              
              <Textarea
                label="Textarea"
                placeholder="Enter a description"
                value={textareaValue}
                onValueChange={setTextareaValue}
                minRows={3}
                variant="bordered"
                color="secondary"
              />

              <Select
                label="Select an animal"
                placeholder="Choose an animal"
                selectedKeys={selectValue}
                onSelectionChange={(keys) => setSelectValue(new Set(Array.from(keys).map(String)))}
                variant="bordered"
                color="success"
              >
                {animals.map((animal) => (
                  <SelectItem key={animal.key}>
                    {animal.label}
                  </SelectItem>
                ))}
              </Select>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Checkbox
                  isSelected={isChecked}
                  onValueChange={setIsChecked}
                >
                  Checkbox (checked: {isChecked.toString()})
                </Checkbox>
                
                <Switch
                  isSelected={isToggled}
                  onValueChange={setIsToggled}
                >
                  Switch (toggled: {isToggled.toString()})
                </Switch>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Slider (value: {sliderValue})
                </label>
                <Slider
                  size="md"
                  step={1}
                  minValue={0}
                  maxValue={100}
                  value={sliderValue}
                  onChange={(value) => setSliderValue(Array.isArray(value) ? value[0] : value)}
                  color="primary"
                  showTooltip={true}
                  className="max-w-md"
                />
              </div>
            </div>
          </div>
        </CardBody>
      </Card>

      {/* Display Components Section */}
      <Card>
        <CardHeader>
          <h2 className="text-xl font-semibold">Display Components</h2>
        </CardHeader>
        <CardBody>
          <div className="space-y-6">
            <div className="flex items-center gap-4 flex-wrap">
              <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" size="sm" />
              <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" size="md" />
              <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" size="lg" />
              <Avatar name="JD" size="md" />
            </div>

            <div className="flex gap-2 flex-wrap">
              <Chip color="primary" variant="flat">Primary Chip</Chip>
              <Chip color="success" variant="solid">Success Chip</Chip>
              <Chip color="warning" variant="bordered">Warning Chip</Chip>
              <Chip color="danger" variant="dot">Danger Chip</Chip>
              <Chip color="secondary" variant="shadow">Secondary Chip</Chip>
              <Badge content="99+" color="danger" size="sm">
                <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" size="md" />
              </Badge>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium">
                Progress (value: {progressValue}%)
              </label>
              <Progress 
                value={progressValue} 
                color="primary"
                className="max-w-md" 
                showValueLabel={true}
              />
              <div className="flex gap-2">
                <Button 
                  size="sm" 
                  color="secondary"
                  onPress={() => setProgressValue(Math.max(0, progressValue - 10))}
                >
                  Decrease
                </Button>
                <Button 
                  size="sm" 
                  color="primary"
                  onPress={() => setProgressValue(Math.min(100, progressValue + 10))}
                >
                  Increase
                </Button>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>

      {/* Interactive Components Section */}
      <Card>
        <CardHeader>
          <h2 className="text-xl font-semibold">Interactive Components</h2>
        </CardHeader>
        <CardBody>
          <div className="flex gap-4 flex-wrap items-start">
            <Dropdown>
              <DropdownTrigger>
                <Button variant="bordered">Open Dropdown</Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Static Actions">
                <DropdownItem key="new">New file</DropdownItem>
                <DropdownItem key="copy">Copy link</DropdownItem>
                <DropdownItem key="edit">Edit file</DropdownItem>
                <DropdownItem key="delete" className="text-danger" color="danger">
                  Delete file
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>

            <Button onPress={onOpen} color="primary">
              Open Modal
            </Button>

            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
                    <ModalBody>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam pulvinar risus non risus hendrerit venenatis.
                        Pellentesque sit amet hendrerit risus, sed porttitor quam.
                      </p>
                    </ModalBody>
                    <ModalFooter>
                      <Button color="danger" variant="light" onPress={onClose}>
                        Close
                      </Button>
                      <Button color="primary" onPress={onClose}>
                        Action
                      </Button>
                    </ModalFooter>
                  </>
                )}
              </ModalContent>
            </Modal>
          </div>
        </CardBody>
      </Card>

      {/* Tabs Section */}
      <Card>
        <CardHeader>
          <h2 className="text-xl font-semibold">Tabs</h2>
        </CardHeader>
        <CardBody>
          <Tabs 
            selectedKey={selectedTab} 
            onSelectionChange={(key) => setSelectedTab(key as string)}
          >
            <Tab key="tab1" title="Tab 1">
              <Card>
                <CardBody>
                  <p>Content for Tab 1. Selected tab: <Code>{selectedTab}</Code></p>
                </CardBody>
              </Card>
            </Tab>
            <Tab key="tab2" title="Tab 2">
              <Card>
                <CardBody>
                  <p>Content for Tab 2. This tab shows different content.</p>
                </CardBody>
              </Card>
            </Tab>
            <Tab key="tab3" title="Tab 3">
              <Card>
                <CardBody>
                  <p>Content for Tab 3. Each tab can have unique content and components.</p>
                </CardBody>
              </Card>
            </Tab>
          </Tabs>
        </CardBody>
      </Card>

      {/* Table Section */}
      <Card>
        <CardHeader>
          <h2 className="text-xl font-semibold">Table</h2>
        </CardHeader>
        <CardBody>
          <Table aria-label="Example static collection table">
            <TableHeader>
              <TableColumn>NAME</TableColumn>
              <TableColumn>ROLE</TableColumn>
              <TableColumn>STATUS</TableColumn>
            </TableHeader>
            <TableBody>
              {tableData.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.role}</TableCell>
                  <TableCell>
                    <Chip
                      color={
                        item.status === 'Active' ? 'success' :
                        item.status === 'Paused' ? 'warning' : 'default'
                      }
                      size="sm"
                      variant="flat"
                    >
                      {item.status}
                    </Chip>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardBody>
      </Card>

      <Divider className="my-6" />

      {/* State Display */}
      <Card>
        <CardHeader>
          <h2 className="text-xl font-semibold">Current State Values</h2>
        </CardHeader>
        <CardBody>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <p><strong>Input:</strong> &quot;{inputValue}&quot;</p>
              <p><strong>Textarea:</strong> &quot;{textareaValue}&quot;</p>
              <p><strong>Select:</strong> {Array.from(selectValue).join(', ') || 'None'}</p>
            </div>
            <div>
              <p><strong>Checkbox:</strong> {isChecked.toString()}</p>
              <p><strong>Switch:</strong> {isToggled.toString()}</p>
              <p><strong>Slider:</strong> {sliderValue}</p>
              <p><strong>Progress:</strong> {progressValue}%</p>
              <p><strong>Selected Tab:</strong> {selectedTab}</p>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}